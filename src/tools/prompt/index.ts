import { readFileSync } from "fs";
import path from "path";

interface IPromptTemplate<TData = Record<string, unknown>, TTemplate = string> {
  template:
    | "prompt-about-me"
    | "prompt-projects"
    | "prompt-skills"
    | "prompt-fun-fact"
    | "prompt-contact"
    | "prompt-testimonials"
    | "prompt-persona"
    | TTemplate;
  options?: {
    locale?: string;
    data?: TData;
  };
}

const getPromptTemplate = (markdownName: string) => {
  return readFileSync(
    path.join(process.cwd(), `src/tools/prompt/${markdownName}.md`),
    "utf-8"
  );
};

const promptTemplate = <TData = Record<string, unknown>, TTemplate = string>(
  template: IPromptTemplate<TData, TTemplate>["template"],
  options?: IPromptTemplate<TData, TTemplate>["options"]
) => {
  let result = getPromptTemplate(template as string);

  result = result.replace("{date}", new Date(Date.now()).toISOString());

  if (options) {
    result = result.replace(/{locale}/g, options.locale!);
    result = result.replace(/{data}/g, JSON.stringify(options.data!));
  }

  return result;
};

export { getPromptTemplate, promptTemplate };
