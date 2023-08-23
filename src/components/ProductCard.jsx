import {
  SfButton,
  SfLink,
  SfIconFavorite,
  SfIconShoppingCart,
} from "@storefront-ui/react";

export default function ProductCardHorizontal() {
  return (
    <div className="relative flex  hover:shadow-lg min-w-[220px] max-w-[540px] p-4">
      <div className="relative overflow-hidden rounded-md w-[100px] sm:w-[176px]">
        <SfLink href="#">
          <img
            className="w-full h-auto border rounded-md border-neutral-200"
            src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/smartwatch.png"
            alt="alt"
            width="300"
            height="300"
          />
        </SfLink>
        <SfButton
          type="button"
          variant="tertiary"
          size="sm"
          square
          className="absolute bottom-0 right-0 mr-2 mb-2 ring-1 ring-inset ring-neutral-200 !rounded-full bg-primary-100"
          aria-label="Add to wishlist"
        >
          <SfIconFavorite size="sm" />
        </SfButton>
      </div>
      <div className="flex flex-col pl-4 min-w-[180px] flex-1">
        <SfLink
          href="#"
          variant="secondary"
          className="no-underline typography-text-sm sm:typography-text-lg"
        >
          Smartwatch Fitness Tracker
        </SfLink>
        <p className="block py-2 font-normal typography-text-sm text-neutral-700">
          Lightweight • Non slip • Flexible outsole • Easy to wear on and off
        </p>
        <div className=" sm:mt-auto sm:flex justify-between">
          <span className="font-bold typography-text-sm sm:typography-text-lg">
            $2,345.99
          </span>
          <div className="flex items-center justify-between mt-4 sm:mt-0">
            <SfButton
              type="button"
              size="sm"
              slotPrefix={<SfIconShoppingCart size="sm" />}
            >
              Add to cart
            </SfButton>
          </div>
        </div>
      </div>
    </div>
  );
}
