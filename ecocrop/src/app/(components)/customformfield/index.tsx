"use client"

import React from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from 'react-hook-form'
import { FormFieldType } from '@/app/products/CreateProductModal'
import Image from 'next/image'
import { E164Number } from 'libphonenumber-js/core'
import { Calendar } from 'lucide-react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'


interface CustomProps {
    control: Control<any>,
    inputType: FormFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode
}

const RenderField = ({field, props}:{field:any ; props:CustomProps}) => {
    switch (props.inputType) {
        case FormFieldType.INPUT:
            return (
                <div className='flex ronded-md border border-gray-500'>
                    {props.iconSrc && (
                        <Image 
                            src={props.iconSrc}
                            alt={props.iconAlt || "icon"}
                            height={24}
                            width={24}
                            className='ml-2'
                        />
                    )}
                    <FormControl>
                        <Input 
                            placeholder={props.placeholder}
                            {...field}
                            className="shad-input border-0"
                        />
                    </FormControl>
                </div>
            )
        case FormFieldType.PHONE_INPUT:
            return (
            <FormControl>
                <PhoneInput 
                defaultCountry='US'
                placeholder={props.placeholder}
                international
                withCountryCallingCode
                value={field.value as E164Number | undefined}
                onChange={field.onChange}
                className='input-phone'
                />
            </FormControl>
            )
        case FormFieldType.DATE_PICKER:
            return (
                <div className='flex rounded-md border border-gray-400 bg-gray-400'>
                    <Calendar className='w-4 h-4 ml-2'/>
                    <FormControl>
                        <DatePicker 
                            selected={field.value} 
                            onChange={(date) => field.onChnage(date)}
                            dateFormat={props.dateFormat ?? "MM/dd/yyy"}
                            showTimeSelect={props.showTimeSelect ?? false}
                            timeInputLabel="Time:"
                            wrapperClassName='date-picker'
                        />
                    </FormControl>
                </div>
            )
        case FormFieldType.SKELETON:
            return (
                props.renderSkeleton ? props.renderSkeleton(field) : null
            )
        case FormFieldType.SELECT:
            return (
                <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger className="shad-select-trigger">
                        <SelectValue placeholder={props.placeholder} />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent className="shad-select-content">
                    {props.children}
                    </SelectContent>
                </Select>
                </FormControl>
            )
        case FormFieldType.TEXTAREA:
            return (
                <FormControl>
                <Textarea
                    placeholder={props.placeholder}
                    {...field}
                    className="shad-textArea"
                    disabled={props.disabled}
                />
                </FormControl>
            )
        default:
            break;
            }
}

const CustomFormField = (props: CustomProps) => {
    const {control, inputType, name, label} = props
  return (
    <div>
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            
        <FormItem className='flex-1'>
            {inputType !== FormFieldType.CHECKBOX && label && (
                <FormLabel>{label}</FormLabel>
            )}
            <RenderField field={field} props={props}/>
            <FormMessage className='shad-error'/>
        </FormItem>
          )}
        />
    </div>
  )
}

export default CustomFormField