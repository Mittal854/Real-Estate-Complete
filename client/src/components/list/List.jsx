import './list.css'
import Card from '../card/card'
import {listData} from "../../Library/dummyData"

export default function List() {
  return (
    <div className="list">
        {
            listData.map(item=>(
                <Card key={item.id} item={item}/>
            ) )
        }
    </div>
  )
}