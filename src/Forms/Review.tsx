import React from 'react'
import {Button} from '@material-ui/core'

interface Props{
    submit:React.Dispatch<React.SetStateAction<number>>,
    values:any
  }
// type Props={
//     values:React.Dispatch<React.SetStateAction<{}>>
// }
export const Review:React.FC<Props> = ({values,submit}) => {
    return (
        <div>
        <h3>review</h3>
        <p>{values.name}</p>
        <div className="submit-btn">
              <Button onClick={()=>submit(1)} variant="contained" color="primary">Back</Button>
            </div>
        
        
        </div>
    )
}
