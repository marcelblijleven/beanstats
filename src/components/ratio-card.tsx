"use client"

import {type ChangeEvent, type ReactNode, useState} from "react";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {InputWithPrefix} from "@/components/ui/input-with-prefix";
import {Label} from "@/components/ui/label";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

interface UserInputProps {
    id: string;
    value: number | string;
    label: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    prefix?: string;
}

const toFixed = (value: number): string => value.toFixed(2);

const UserInputGroup = ({children}: {children: ReactNode}) => (
    <div className={"flex flex-col md:flex-row gap-2 md:gap-4"}>
        {children}
    </div>
)

const UserInput = ({id, label, value, onChange, prefix}: UserInputProps) => (
    <div className="flex flex-col items-left w-full gap-1.5">
        <Label htmlFor={id}>{label}</Label>
        {!prefix && (<Input
            id={id}
            value={value}
            type={"text"}
            className={"text-lg"}
            inputMode={"decimal"}
            pattern="[0-9]+([,\.][0-9]+)?"
            onChange={onChange}
        />)}
        {!!prefix && (
            <InputWithPrefix
                prefix={prefix}
                id={id}
                value={value}
                type={"text"}
                className={"text-lg"}
                inputMode={"decimal"}
                pattern="[0-9]+([,\.][0-9]+)?"
                onChange={onChange}
            />
        )}
    </div>
)


const CalculatedValue = ({title, value}: {title: string, value: string}) => (
    <div className={"flex flex-col space-y-1.5 items-center"}>
        <span className={"font-light"}>{title}</span>
        <span className={"font-bold text-5xl"}>{value}</span>
    </div>

)


const RatioCard = () => {
    const [ratio, setRatio] = useState<number | string>(16);
    const [coffee, setCoffee] = useState<number | string>(12.5);
    const [water, setWater] = useState<number | string>(200);

    const onChange = (setFunc: (value: string | number) => void) => (event: ChangeEvent<HTMLInputElement>) => setFunc(
        event.currentTarget.value.replace(",", ".")
    );

    const onChangeWater = onChange(setWater);
    const onChangeCoffee = onChange(setCoffee);
    const onChangeRatio = onChange(setRatio);

    return (
        <Card className={"min-w-full"}>
            <CardHeader>
                <CardTitle>Brew ratio</CardTitle>
                <CardDescription>Calculate your brew ratio</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue={"coffee"}>
                    <TabsList>
                        <TabsTrigger value={"coffee"}>Coffee</TabsTrigger>
                        <TabsTrigger value={"water"}>Water</TabsTrigger>
                        <TabsTrigger value={"ratio"}>Ratio</TabsTrigger>
                    </TabsList>
                    <TabsContent value={"coffee"} className={"space-y-2 md:space-y-4"}>
                        <UserInputGroup>
                            <UserInput id={"coffee-tab_ratio"} label={"Ratio"} value={ratio} onChange={onChangeRatio} prefix={"1/"}/>
                            <UserInput id={"coffee-tab_water"} label={"Water (gr/ml)"} value={water} onChange={onChangeWater} />
                        </UserInputGroup>
                        <CalculatedValue title={"Calculated ground coffee (gr/ml)"} value={!!ratio && !!water ? toFixed(parseFloat(water as string) / parseFloat(ratio as string)) : "-"} />
                    </TabsContent>
                    <TabsContent value={"water"} className={"space-y-2 md:space-y-4"}>
                        <UserInputGroup>
                            <UserInput id={"water-tab_ratio"} label={"Ratio"} value={ratio} onChange={onChangeRatio} prefix={"1/"}/>
                            <UserInput id={"water-tab_coffee"} label={"Ground coffee (gr)"} value={coffee} onChange={onChangeCoffee} />
                        </UserInputGroup>
                        <CalculatedValue title={"Calculated water (gr/ml)"} value={!!ratio && !!coffee ? toFixed(parseFloat(ratio as string) * parseFloat(coffee as string)) : "-"} />
                    </TabsContent>
                    <TabsContent value={"ratio"} className={"space-y-2 md:space-y-4"}>
                        <UserInputGroup>
                            <UserInput id={"ratio-tab_water"} label={"Water (gr/ml)"} value={water} onChange={onChangeWater} />
                            <UserInput id={"ratio-tab_coffee"} label={"Ground coffee (gr)"} value={coffee} onChange={onChangeCoffee} />
                        </UserInputGroup>
                        <CalculatedValue title={"Calculated ratio"} value={!!water && !! coffee ? `1/${toFixed(parseFloat(water as string) / parseFloat(coffee as string))}` : "-"} />
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}

export default RatioCard
