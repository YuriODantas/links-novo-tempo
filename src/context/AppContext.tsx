import React, { FC, createContext, useEffect, useState } from 'react'
import * as XLSX from 'xlsx'
import { IProfessional } from '../types/IProfessional'
import { ISchedule } from '../types/ISchedule'
import { IButtons } from '../types/IButtons'

const formatterProfessionals = (workbook: XLSX.WorkBook) => {
  const worksheet = workbook.Sheets[workbook.SheetNames[0]]
  const rawData = XLSX.utils.sheet_to_json(worksheet, {
    header: 1
  })
  rawData.shift()
  rawData.shift()
  rawData.shift()
  const formatterData: IProfessional[] = rawData.map(data => {
    return {
      id: data[0],
      name: data[1],
      profession: data[2],
      company: data[3],
      photo: data[8],
      slug: data[6],
      description: data[4],
      address: data[7],
      whatsapp: data[5],
      social: {
        facebook: data[9],
        instagram: data[10],
        linkedIn: data[11]
      }
    }
  })
  return formatterData
}

const formatterSchedule = (workbook: XLSX.WorkBook) => {
  const worksheet = workbook.Sheets[workbook.SheetNames[1]]
  const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
  rawData.shift()
  rawData.shift()
  const formatterData: ISchedule[] = rawData.map(data => {
    return {
      title: data[1],
      firstDesc: data[2],
      secondDesc: data[3]
    }
  })
  return formatterData
}

const formatterButtons = (workbook: XLSX.WorkBook) => {
  const worksheet = workbook.Sheets[workbook.SheetNames[2]]
  const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
  rawData.shift()
  rawData.shift()
  const formatterData: IButtons[] = rawData.map(data => {
    return {
      icon: data[3],
      name: data[1],
      link: data[2]
    }
  })
  return formatterData
}

type AppContextType = {
  professionals: IProfessional[]
  schedule: ISchedule[]
  buttons: IButtons[]
  position: number
  handleNextInfoFooter: () => void
  handlePreviousInfoFooter: () => void
  loading: boolean
}

export const AppContext = createContext({} as AppContextType)

export const AppProvider: FC = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [professionals, setProfessionals] = useState<IProfessional[]>([])
  const [schedule, setSchedule] = useState<ISchedule[]>([])
  const [buttons, setButtons] = useState<IButtons[]>([])

  const [position, setPosition] = useState(0)

  const handleNextInfoFooter = () => {
    setPosition(pos => (pos < schedule.length - 1 ? pos + 1 : pos))
  }

  const handlePreviousInfoFooter = () => {
    setPosition(pos => (pos > 0 ? pos - 1 : pos))
  }

  const load = async () => {
    setLoading(true)
    try {
      const url =
        'https://docs.google.com/spreadsheets/d/1dVZRyy71lKSvk--E_E_OSqtNqVMsoWMAH1bz5lxX9b0/edit?usp=drive_link'
      const file = await (await fetch(url)).arrayBuffer()
      const workbook = XLSX.read(file)
      setProfessionals(formatterProfessionals(workbook))
      setSchedule(formatterSchedule(workbook))
      setButtons(formatterButtons(workbook))
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <AppContext.Provider
      value={{
        professionals,
        schedule,
        buttons,
        position,
        handleNextInfoFooter,
        handlePreviousInfoFooter,
        loading
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
