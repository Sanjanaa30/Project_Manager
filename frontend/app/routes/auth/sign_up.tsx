import { signUpSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleOnSubmit = (values: SignUpFormData) => {
    console.log(values);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 via-purple-500 to-blue-400 p-4">
      <Card className="max-w-sm w-full bg-white/95 backdrop-blur-sm shadow-2xl border border-white/20 rounded-2xl flex flex-col justify-center">
        <CardContent className="px-9 flex-1 flex flex-col justify-center w-full">
          <CardHeader className="text-center pb-5">
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Create Account
            </CardTitle>
          </CardHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleOnSubmit)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-medium">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Your full name"
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-medium">
                      Email
                    </FormLabel>
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
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-slate-700 font-medium">
                        Password
                      </FormLabel>
                    </div>
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-medium">
                      Confirm Password
                    </FormLabel>
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
                Sign Up
              </Button>
            </form>
          </Form>
          <CardFooter className="px-5 pt-4">
            <div className="flex items-center justify-center w-full">
              <p className="text-sm text-slate-600">
                Already have an account?{" "}
                <Link
                  to="/sign-in"
                  className="text-purple-600 hover:text-purple-700 hover:underline font-medium transition-colors"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
