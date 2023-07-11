import { useGetCurrUser } from "../hooks/auth/useGetCurrUser"

export const checkAuth = async (dispatch, router) => {
  if (typeof window == "undefined")
    return
  const user = await dispatch(useGetCurrUser())
  if(!user.currUser)
    router.push('auth/login')
}