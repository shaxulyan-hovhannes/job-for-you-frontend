import MuiTextField from "@/components/core/ui/textfield";

export default function EmployerteSignupForm() {
  return (
    <form>
      <div className="pair-fields-block">
        <div>
          <MuiTextField
            placeholder={"Username"}
            onChange={() => {}}
            value={""}
            onClearField={() => {}}
          />
        </div>
        <div>
          <MuiTextField
            placeholder={"Email"}
            onChange={() => {}}
            value={""}
            onClearField={() => {}}
          />
        </div>
      </div>

      <div className="pair-fields-block">
        <div>
          <MuiTextField
            placeholder={"Username"}
            onChange={() => {}}
            value={""}
            onClearField={() => {}}
          />
        </div>
        <div>
          <MuiTextField
            placeholder={"Email"}
            onChange={() => {}}
            value={""}
            onClearField={() => {}}
          />
        </div>
      </div>
    </form>
  );
}
