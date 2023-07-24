import React from 'react'

import DialogItem from './dialogItem/DialogItem'
import { dialogStore } from '../../store/index'
import { useState } from 'react'
import axios from 'axios'
import DialogService from '../../API/DialogService'
import { useFetching } from '../../hooks/useFetching'
import { useEffect } from 'react'

const Dialogs = () => {

    const [dialogs, setDialogs] = useState([]);
  
    const [fetchDialogs, isLoading, error] = useFetching( async () => {
      const response = await DialogService.getDialogs()
      setDialogs(response.data)
    })

    useEffect(() => {
      fetchDialogs()
    }, [])

  let dialogsElements = dialogs.map((dialog) => {
    return <DialogItem
             key={dialog.id}
             id={dialog.id}
             name={dialog.name}
             messages={dialog.messages}
          />
  })
  return (
    <div>
      {dialogsElements}
    </div>
  )
}

export default Dialogs