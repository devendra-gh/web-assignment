import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleRTL } from '../../redux/actions/layout';

export const useRTL = () => {
  const dispatch: any = useDispatch()
  const isRtl = useSelector((state: any) => state?.layout?.isRTL)

  const setValue = (value: Function) => {
    try {
      const valueToStore = value instanceof Function ? value(isRtl) : value
      dispatch(handleRTL(valueToStore));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // ** Get HTML Tag
    const element = document.getElementsByTagName('html')[0]

    // ** If isRTL then add attr dir='rtl' with HTML else attr dir='ltr'
    if (isRtl) {
      element.setAttribute('dir', 'rtl')
    } else {
      element.setAttribute('dir', 'ltr')
    }
  }, [isRtl])

  return [isRtl, setValue]
}
