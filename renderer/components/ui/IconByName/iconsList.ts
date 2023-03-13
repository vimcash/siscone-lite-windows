import { FaFileCsv } from 'react-icons/fa'
import { BsFillCreditCard2BackFill, BsFillCalendarDateFill } from 'react-icons/bs'
import { RiFileChartFill } from 'react-icons/ri'
import { MdSettings, MdCancel } from 'react-icons/md'
import { IoIosSave } from 'react-icons/io'
import { TiArrowBack } from 'react-icons/ti'
import { SiMicrosoftexcel } from 'react-icons/si'
import { CgDetailsMore } from 'react-icons/cg'

export type IconsType = "fileCsv" | "card" | "report" | "setting" | "save" | "cancel" | "back" | "excel" | "calendar" | "moreDetails"

export const iconsList = {
  fileCsv: FaFileCsv,
  card: BsFillCreditCard2BackFill,
  report: RiFileChartFill,
  setting: MdSettings,
  save: IoIosSave,
  cancel: MdCancel,
  back: TiArrowBack,
  excel: SiMicrosoftexcel,
  calendar: BsFillCalendarDateFill,
  moreDetails: CgDetailsMore
}