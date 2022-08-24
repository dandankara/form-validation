import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { registerSchema } from "../Schema/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const textInputClassName =
  "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const formSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="md:w-[500px] shadow-sm shadow-white bg-white w-[320px] mx-auto px-7 py-4 rounded-xl">
      <form onSubmit={handleSubmit(formSubmitHandler)} className="w-full">
        <div className="mb-6">
          <label htmlFor="nome" className="block mb-2 text-sm font-medium">
            Nome
          </label>
          <input
            {...register("nome")}
            type="text"
            name="nome"
            id="nome"
            className={textInputClassName}
          />
          {errors.nome ? (
            <small className="text-red-500">{errors.nome.message}</small>
          ) : (
            <></>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            className={textInputClassName}
          />
          {errors.email ? (
            <small className="text-red-500">{errors.email.message}</small>
          ) : (
            <></>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Senha
          </label>
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password"
            className={textInputClassName}
          />
          {errors.password ? (
            <small className="text-red-500">{errors.password.message}</small>
          ) : (
            <></>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium "
          >
            Confirmar senha
          </label>
          <input
            {...register("confirmPassword")}
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            className={textInputClassName}
          />
          {errors.confirmPassword ? (
            <small className="text-red-500">
              {errors.confirmPassword.message}
            </small>
          ) : (
            <></>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="accountType"
            className="block mb-2 text-sm font-medium"
          >
            Selecione o tipo de conta
          </label>
          <select
            {...register("accountType")}
            name="accountType"
            id="accountType"
            className="border w-48 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected value="Tipo de conta">
              Tipo de conta
            </option>
            <option value="personal">Pessoal</option>
            <option value="commercial">Empresarial</option>
            <option value="studing">Estudante</option>
          </select>
          {errors.accountType ? (
            <small className="text-red-500">{errors.accountType.message}</small>
          ) : (
            <></>
          )}
        </div>
        <div className="flex justify-between mb-6">
          <div>
            <div className="flex">
              <div className="flex items-center h-5">
                <input
                  {...register("remember")}
                  id="remember"
                  name="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                />
              </div>
              <label htmlFor="remember" className="ml-2 text-sm font-medium ">
                Lembrar
              </label>
            </div>
            {errors.remember ? (
              <small className="text-red-500">{errors.remember.message}</small>
            ) : (
              <></>
            )}
          </div>

          <div>
            <div>
              <label
                htmlFor="toggle"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  {...register("toggle")}
                  type="checkbox"
                  name="toggle"
                  value=""
                  id="toggle"
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-100-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900">
                  Aceitar termos
                </span>
              </label>
            </div>
            {errors.toggle ? (
              <small className="text-red-500">{errors.toggle.message}</small>
            ) : (
              <></>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
