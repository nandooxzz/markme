import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card"

type NoteProps = {
    title: string,
    timestamp: string
}

export default function Note(props: NoteProps) {
    return(
        <Card className="bg-zinc-800 border-zinc-600 text-zinc-50 select-none cursor-pointer transition-all hover:bg-zinc-700 hover:border-zinc-600">
                <CardHeader>
                    <CardTitle>{props.title}</CardTitle>
                    <CardDescription>Last saved: {props.timestamp}</CardDescription>
                </CardHeader>
        </Card>
    )
}