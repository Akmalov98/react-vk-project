import React, { useState } from 'react'
import { IoSend } from 'react-icons/io5'
import { useParams } from 'react-router-dom'
import S from './Dialog.module.css'
import { dialogStore } from '../../../store'
import { useFetching } from '../../../hooks/useFetching'
import DialogService from '../../../API/DialogService'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';



const Dialog = ({...props}) => {
    // const {id} = useParams() 
    const messageId = uuidv4;
    
    const [dialog, setDialog] = useState([]);
    const [textareaMessage, setTextareaMessage] = useState('')
    const params = useParams()


    const addDialogMessage = async (e) => {
        e.preventDefault()

        const newMessage = {
            id: messageId(),
            message: textareaMessage
        }

        const message = await DialogService.addMessage(params.id, newMessage)
        setDialog(await (DialogService.getById(params.id)).data)
    }

    console.log(dialog.messages)

    const [fetchDialogByID, isLoadinf, error] = useFetching( async () => {
        const response = await DialogService.getById(params.id)
        setDialog(response.data)
    })

    useEffect(() => {
        fetchDialogByID()
    }, [])
  return (
    <div className={S.dialog}>
        <div className={S.userInfo}>
        </div>{
            dialog?.messages?.map(({id, message}) => (
                <div>{message}</div>
            ))
        }  
        <div className={S.dialogTextareaButton}>
            <div className={S.textareaDiv}>
                <textarea 
                    className={S.textarea}
                   placeholder="write message"
                   value={textareaMessage}
                   onChange={e => setTextareaMessage(e.target.value)}
                >
                    
                    </textarea>
                </div>
            <div className={S.dialogbuttonIcon}>
            <button 
                className={S.button}
                onClick={addDialogMessage}
                >
                     <IoSend className={S.icon}/>
            </button>
        </div>
    </div>
</div>
  )
}

export default Dialog