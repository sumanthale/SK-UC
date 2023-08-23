import { SfIconRadioButtonChecked, SfListItem } from "@storefront-ui/react";

const Profile = () => {
  return (
    <div>
      <h1 className="p-4 border-b-2  border-neutral-200 font-semibold">
        Profile
      </h1>
      <div className="flex flex-col max-w-sm gap-1">
        <SfListItem slotPrefix={<SfIconRadioButtonChecked />} className=" py-3">
          <span>Account Settings</span>
        </SfListItem>
        <SfListItem slotPrefix={<SfIconRadioButtonChecked />} className=" py-3">
          <span>Payment</span>
        </SfListItem>
        <SfListItem
          slotPrefix={<SfIconRadioButtonChecked color="#6E32F0" />}
          className="bg-secondary-100 hover:bg-secondary-100 py-3"
        >
          <span className="font-semibold">Saved</span>
        </SfListItem>
        <SfListItem slotPrefix={<SfIconRadioButtonChecked />} className=" py-3">
          <span>Order</span>
        </SfListItem>
      </div>
    </div>
  );
};

export default Profile;
