import * as React from "react"

export type ToastProps = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
}

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type State = {
  toasts: ToastProps[]
}

const toastState: State = {
  toasts: [],
}

export function useToast() {
  const [state, setState] = React.useState<State>(toastState)

  return {
    toasts: state.toasts,
    toast: (props: Omit<ToastProps, "id">) => {
      const id = Math.random().toString(36).substr(2, 9)
      setState((state) => ({
        ...state,
        toasts: [...state.toasts, { ...props, id }],
      }))
    },
  }
} 