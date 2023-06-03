import { FaFileCsv, FaUser, FaWarehouse } from 'react-icons/fa'
import { BsFillCreditCard2BackFill, BsFillCalendarDateFill } from 'react-icons/bs'
import { RiFileChartFill } from 'react-icons/ri'
import { MdSettings, MdCancel, MdShoppingCart, MdMapsHomeWork } from 'react-icons/md'
import { IoIosSave, IoMdAdd } from 'react-icons/io'
import { TiArrowBack } from 'react-icons/ti'
import { SiMicrosoftexcel } from 'react-icons/si'
import { CgDetailsMore } from 'react-icons/cg'
import { FiSearch } from 'react-icons/fi'

export type IconsType = "fileCsv" | "card" | "report" | "setting" | "save" | "cancel" | "back" | "excel" | "calendar" | "moreDetails" | "add" | 'search' | "shop" | "store" | "company" | "user"

export const iconsList = {
  fileCsv: FaFileCsv,
  card: BsFillCreditCard2BackFill,
  report: RiFileChartFill,
  setting: MdSettings,
  save: IoIosSave,
  add: IoMdAdd,
  search: FiSearch,
  cancel: MdCancel,
  back: TiArrowBack,
  excel: SiMicrosoftexcel,
  calendar: BsFillCalendarDateFill,
  moreDetails: CgDetailsMore,
  shop: MdShoppingCart,
  store: FaWarehouse,
  company: MdMapsHomeWork,
  user: FaUser
}