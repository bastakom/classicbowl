"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { set, z } from "zod";
import { Toaster, toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { formSchema } from "./schemas/form-schema";
import { Textarea } from "../textarea";
import Link from "next/link";
import { useState } from "react";

export function Bookingform({ settings, blok, label, formTitle }: any) {
  const [checkbox, setCheckbox] = useState(false);

  const handleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mail: "",
      phone: "",
      message: "",
      adults: "",
      children: "",
      title: blok?.title || formTitle,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok && checkbox) {
        form.reset();

        toast("Tack för ditt meddelande, vi återkommer snarast!", {
          style: {
            height: "10vh",
            width: "30vw",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
          },
        });
        setCheckbox(false);
      }
    } catch (error) {
      console.error("Error sending message.", error);
      toast("Tyvärr gick något snett!");
    }
  }

  return (
    <div className="w-[100%] mt-5">
      <Toaster closeButton={true} />
      <div className="flex flex-col items-end -mt-5 lg:mt-0">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 my-14 lg:w-[80%] flex flex-col gap-4"
          >
            <div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {settings.content.form_name_placeholder}
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-7">
              <FormField
                control={form.control}
                name="mail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {settings.content.form_mail_placeholder}
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {settings.content.form_phone_placeholder}
                    </FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="adults"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Antal vuxna</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Välj antal" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="6">6</SelectItem>
                        <SelectItem value="many">7 eller fler</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="children"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Antal barn</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Välj antal" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="6">6</SelectItem>
                        <SelectItem value="many">7 eller fler</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{label || ""}</FormLabel>

                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="items-top flex space-x-2">
              <Checkbox
                id="terms1"
                onClick={() => handleCheckbox()}
                checked={checkbox}
              />
              <div className="grid gap-1.5 ">
                <label
                  htmlFor="terms1"
                  className="text-[18px] lg:text-lg font-medium leading-[1.5rem] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white font"
                >
                  Vi värnar om din integritet och hanterar dina uppgifter med
                  största omsorg. Läs mer om hur vi behandlar personuppgifter i
                  vår{" "}
                  <Link
                    href={"/integritetspolicy"}
                    className="normal-case text-lg font-extrabold not-italic"
                  >
                    integritetspolicy.
                  </Link>
                </label>
              </div>
            </div>
            <div className="flex justify-start">
              <Button type="submit">Skicka</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
