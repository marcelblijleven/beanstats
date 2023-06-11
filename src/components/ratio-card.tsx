"use client"

import {ChangeEvent, ReactNode, useState} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {InputWithPrefix} from "@/components/ui/input-with-prefix";

interface UserInputProps {
    id: string;
    value: number | undefined;
    label: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    prefix?: string;
}

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
            type={"number"}
            className={"text-lg"}
            onChange={onChange}
        />)}
        {!!prefix && (
            <InputWithPrefix
                prefix={prefix}
                id={id}
                value={value}
                type={"number"}
                className={"text-lg"}
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
    const [ratio, setRatio] = useState<number | undefined>(16);
    const [coffee, setCoffee] = useState<number | undefined>(12.5);
    const [water, setWater] = useState<number | undefined>(200);

    const onChange = (setFunc: any) => (event:ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (value === "") {
            return setFunc(undefined);
        }
        setFunc(parseInt(value))
    }

    const onChangeWater = onChange(setWater);
    const onChangeCoffee = onChange(setCoffee);
    const onChangeRatio = onChange(setRatio);

    return (
        <Card className={"w-full max-w-xl"}>
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
                        <CalculatedValue title={"Calculated ground coffee (gr/ml)"} value={!!ratio && !!water ? (water / ratio).toFixed(2) : "-"} />
                    </TabsContent>
                    <TabsContent value={"water"} className={"space-y-2 md:space-y-4"}>
                        <UserInputGroup>
                            <UserInput id={"water-tab_ratio"} label={"Ratio"} value={ratio} onChange={onChangeRatio} prefix={"1/"}/>
                            <UserInput id={"water-tab_coffee"} label={"Ground coffee (gr)"} value={coffee} onChange={onChangeCoffee} />
                        </UserInputGroup>
                        <CalculatedValue title={"Calculated water (gr/ml)"} value={!!ratio && !!coffee ? (ratio * coffee).toFixed(2) : "-"} />
                    </TabsContent>
                    <TabsContent value={"ratio"} className={"space-y-2 md:space-y-4"}>
                        <UserInputGroup>
                            <UserInput id={"ratio-tab_water"} label={"Water (gr/ml("} value={water} onChange={onChangeWater} />
                            <UserInput id={"ratio-tab_coffee"} label={"Ground coffee (gr)"} value={coffee} onChange={onChangeCoffee} />
                        </UserInputGroup>
                        <CalculatedValue title={"Calculated ratio"} value={!!water && !! coffee ? `1/${(water / coffee).toFixed(2)}` : "-"} />
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}

export default RatioCard
