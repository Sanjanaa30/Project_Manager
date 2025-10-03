import { signInSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

type SignInFormData = z.infer<typeof signInSchema>;

const SignIn = () => {
    const form = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleOnSubmit = (values: SignInFormData) => {
        console.log(values);
    };

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 via-purple-500 to-blue-400 p-4">
            <Card className="max-w-sm w-full bg-white/95 backdrop-blur-sm shadow-2xl border border-white/20 rounded-2xl flex flex-col justify-center">
                <CardHeader className="text-center mb-1 pt-6">
                    <CardTitle className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Welcome Back</CardTitle>
                    <CardDescription className="text-sm text-slate-600">
                        Please enter your credentials to sign in.
                    </CardDescription>
                </CardHeader>
                <CardContent className="px-9 py-3 flex-1 flex flex-col justify-center w-full">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleOnSubmit)}
                            className="space-y-4">
                                <FormField 
                                    control={form.control} 
                                    name="email" 
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className="text-slate-700 font-medium">Email</FormLabel>
                                            <FormControl>
                                                <Input 
                                                    type="email" 
                                                    placeholder="email@example.com" 
                                                    className="border-slate-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-lg h-10" 
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} 
                                />
                                <FormField 
                                    control={form.control} 
                                    name="password" 
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className="text-slate-700 font-medium">Password</FormLabel>
                                            <FormControl>
                                                <Input 
                                                    type="password" 
                                                    placeholder="••••••••" 
                                                    className="border-slate-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-lg h-10" 
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} 
                                />
                                <Button 
                                    type="submit" 
                                    className="w-full pt-2 text-sm bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                                >
                                    Sign In
                                </Button>
                            </form>
                    </Form>
                </CardContent>
                <CardFooter className="px-5 pb-6">
                    <div className="flex items-center justify-center w-full">
                        <p className="text-sm text-slate-600">
                            Don&apos;t have an account?{" "} 
                            <Link to="/sign-up" className="text-purple-600 hover:text-purple-700 hover:underline font-medium transition-colors">Sign Up</Link>
                        </p>
                    </div>
                </CardFooter>
                
            </Card>
        </div>
    );
}

export default SignIn;