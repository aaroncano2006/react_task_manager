import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "../schemas/task";

function Form({id, bootstrap, children, submitHandler }) {
  const methods = useForm({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    submitHandler(data);
    methods.reset();
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
