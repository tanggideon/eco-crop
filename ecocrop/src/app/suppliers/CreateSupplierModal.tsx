"use client"

import React, { useState } from 'react';
import { v4 } from 'uuid';
import Header from '../(components)/Header';
import {zodResolver} from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form, FormControl
} from "@/components/ui/form"

import { Button } from '@/components/ui/button';
import CustomFormField from '../(components)/customformfield';
import { UserFormValidation } from '@/lib/validation';
import SubmitButton from '../(components)/submitbutton';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Genders } from '@/constants';
import { ClassNames } from '@emotion/react';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';

export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton"
}




type ProductFormData = {
    name: string;
    description: string;
    measurement: string;
}

type CreateProductProps = {
    isOpen: boolean;
    onClose: () => void;
    // onCreate: (formData: ProductFormData) => void; 
}

const CreateSupplierModel = ({isOpen, onClose}: CreateProductProps) => {
    if (!isOpen) return null;

    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
          name: "",
          email: "",
          phone: "",
        },
      })
    
    function onSubmit(values: z.infer<typeof UserFormValidation>) {
      setIsLoading(true);
      try {
        console.log(values)
      } catch (error) {
        console.log(error);
      }
    }

    return (
        

    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20 p-20' >
        <div className='relative top-20 mx-auto border w-96 xl:w-[1024px]  shadow-lg rounded-md bg-white p-10' >
        <div className="flex items-center justify-between my-3">
          <Header name="Create New Supplier" />
          <Button className="shadow-none bg-transparent outline-none hover:bg-green-100" onClick={onClose}>
            <X className="w-[25px] h-[25px]" />
          </Button>
        </div>
            <hr/>
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <CustomFormField 
            inputType={FormFieldType.INPUT}
            control={form.control} 
            name="name"
            label="Supplier Name"
            placeholder="Supplier Name"
            iconSrc=""
            iconAlt="icon"
            />
        <div className="flex flex-col gap-6 xl:flex-row">
        <CustomFormField 
            inputType={FormFieldType.INPUT}
            control={form.control} 
            name="email"
            label="Email"
            placeholder="Supplier Email"
            iconSrc=""
            iconAlt="Email icon"
            />
        <CustomFormField 
        inputType={FormFieldType.PHONE_INPUT}
        control={form.control} 
        name="phone"
        label="Phone Number"
        placeholder="+233 591234567"
        />
        </div>
        <div className="flex flex-col gap-6">
            <CustomFormField 
                inputType={FormFieldType.DATE_PICKER}
                control={form.control} 
                name="DOB"
                label="Date of Birth"
            />
            <CustomFormField 
            inputType={FormFieldType.SKELETON}
            control={form.control} 
            name="gender"
            label="Gender"
            renderSkeleton={(field) => (
                <FormControl>
                    <RadioGroup 
                    className="flex gap-6 xl:justify-between"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    >
                        {Genders.map((gender) => (
                            <div key={gender} ClassNamesradio-group>
                                <RadioGroupItem value={gender} id={gender} />
                                <Label htmlFor={gender} className="cursor-pointer">{gender}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                </FormControl>
            )}
            />
        </div>
        <div className="flex flex-col gap-6 xl:flex-row">
        <CustomFormField 
            inputType={FormFieldType.INPUT}
            control={form.control} 
            name="address"
            label="Address"
            placeholder="Postal Address"
            />
        <CustomFormField 
        inputType={FormFieldType.INPUT}
        control={form.control} 
        name="physicaladdress"
        label="Phusical Address"
        placeholder="Physical Address"
        />
        </div>
        <SubmitButton isLoading={isLoading}>Add Supplier</SubmitButton>
      </form>
    </Form>
        </div>
    </div>
  )
}

export default CreateSupplierModel