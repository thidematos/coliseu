import ColiseuTitle from "./../../ui/ColiseuTitle";
import Logo from "./../../ui/Logo";
import AdminControls from "./AdminControls";

function AdminHeader({ useControls = false }) {
  return (
    <div className="mb-8 space-y-8">
      <div className="flex flex-row items-center justify-center gap-4">
        <Logo width={"w-[25%]"} />
        <ColiseuTitle
          useCNPJ
          titleSize="text-3xl"
          cnpjSize="text-sm text-stone-600 drop-shadow-sm"
        />
      </div>
      {useControls && <AdminControls />}
    </div>
  );
}

export default AdminHeader;
