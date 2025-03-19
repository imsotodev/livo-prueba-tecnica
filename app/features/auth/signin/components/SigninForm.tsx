import { useForm, type SubmitHandler } from "react-hook-form";
import { SigninSchema } from "../../schemas/SigninFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "~/common/components/ui/Button";
import InputGroup from "~/common/components/ui/input/group";
import { signin } from "~/common/api/auth";
import { toast } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router";

function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninSchema>({
    resolver: zodResolver(SigninSchema),
  });
  const nav = useNavigate();
  const [isLoadind, setIsLoading] = useState(false);

  const handleSignin: SubmitHandler<SigninSchema> = async (data) => {
    setIsLoading(true);
    toast.promise(signin(data), {
      loading: "Carregando...",
      success: () => {
        nav("/");
        return "Login feito com sucesso";
      },
      error: (err) => {
        const errorType = err.response.data.non_field_errors;
        const errorMessage = errorType
          ? "credenciais inválidas"
          : "Erro ao fazer login";
        return errorMessage;
      },
      finally: () => {
        setIsLoading(false);
      },
    });
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit(handleSignin)}>
        <div className="flex flex-col gap-3 px-5">
          <InputGroup
            type="text"
            placeholder="Escreva seu nome de usuário"
            label="usuário"
            {...register("username")}
            errors={errors.username}
            disabled={isLoadind}
          />
          <InputGroup
            type="password"
            placeholder="Escreva seu senha"
            label="senha"
            {...register("password")}
            errors={errors.password}
            disabled={isLoadind}
          />
        </div>
        <div className="w-3/5 mx-auto mt-10">
          <Button disabled={isLoadind}>Entrar</Button>
        </div>
      </form>
    </>
  );
}

export default SigninForm;
