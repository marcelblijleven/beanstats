import Form from "@/app/beanconqueror/share/create/components/form";

export default function CreateShareLinkPage() {
    return (
        <div className={"flex flex-col items-center w-full max-w-3xl space-y-4"}>
            <h1 className={"text-4xl md:text-6xl font-bold text-center"}>
                Create a <span className={"gradient-text"}>Beanconqueror</span> share url
            </h1>
            <Form />
        </div>
    )
}