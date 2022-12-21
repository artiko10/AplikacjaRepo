import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import Card from 'react-bootstrap/Card';

export function SortableItem(props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition

    } = useSortable({id: props.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div id = "cardSpace" ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Card id = "cardCountry" body className="m-3">{props.id}</Card>
        </div>
    )
}