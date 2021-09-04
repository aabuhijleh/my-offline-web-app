import React from "react";
import { QuestionBox } from "./components/QuestionBox";

export const App: React.FC = () => {
  return (
    <div>
      <QuestionBox
        question={
          "عندما ترتفع حرارة الماء في المحرك وتريد إضافة ماء فكيف تفعل ذلك :"
        }
        choices={[
          "تفتح غطاء المبرد بحذر وتضيف ماء والمحرك متوقف عن العمل .",
          "توقف عمل المحرك وتنتظر إلى أن يبرد المحرك ثم تضيف ماء .",
          "توقف عمل المحرك وتنتظر إلى أن يبرد المحرك ثم تضيف ماء .",
          "تتوجه إلى أقرب كراج لإضافة ماء في المبرد .",
        ]}
        correctChoiceIndex={2}
      ></QuestionBox>
    </div>
  );
};
