import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    onChangeValue: (newValue: string) => void

}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState('')

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.onChangeValue(title)
    }
    const onChangeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => setTitle(event.currentTarget.value)

    return editMode
        ? <input value={title}
                 onBlur={deactivateEditMode}
                 autoFocus
                   onChange={onChangeTitleHandler}
        />
        : <span onDoubleClick={activateEditMode}>{props.title}</span>
}