import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "../schemas/task";

function Form({id, bootstrap, children }) {
  const methods = useForm({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data) => {
    const maxKey = localStorage.length + 1;
    localStorage.setItem(maxKey, JSON.stringify(data));
    methods.reset();
    window.location.reload();
  };

  return (
    <FormProvider {...methods}>
      <form
        id={id}
        className={bootstrap}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export default Form;
