import React, { useState } from 'react'
import { IoSend } from 'react-icons/io5'
import { useParams } from 'react-router-dom'
import S from './Dialog.module.css'
import { dialogStore } from '../../../store'
import { useFetching } from '../../../hooks/useFetching'
import PostService from '../../../API/PostService'
import DialogService from '../../../API/DialogService'
import { useEffect } from 'react'

const Dialog = ({...props}) => {
    // const {id} = useParams() 
    
    const [dialog, setDialog] = useState({})
    const params = useParams()


    console.log(dialog,'kjsefhcs')


    const [fetchDialogByID, isLoadinf, error] = useFetching( async () => {
        const response = await DialogService.getById()
        setDialog(response.data)
    })

    useEffect(() => {
        fetchDialogByID()
    }, [])
  return (
    <div className={S.dialog}>
        <div className={S.userInfo}>
        </div>
            {/* {params.id} {dialog.messages} */}
        <div className={S.dialogTextareaButton}>
            <div className={S.textareaDiv}>
                <textarea 
                    className={S.textarea}
                   placeholder="write message"
                    >
                    
                    </textarea>
                </div>
            <div className={S.dialogbuttonIcon}>
            <button 
                className={S.button}
                >
                     <IoSend className={S.icon}/>
            </button>
        </div>
    </div>
</div>
  )
}

export default Dialog