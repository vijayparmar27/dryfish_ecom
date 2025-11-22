import { useCallback } from "react";
// redux
import { useDispatch, useSelector } from "@/redux/store";
import {
  gotoStep,
  nextStep,
  backStep,
  addToCart,
  resetCart,
  deleteCart,
  createBilling,
  applyDiscount,
  applyShipping,
  increaseQuantity,
  decreaseQuantity,
} from "@/redux/slices/product";
// _mock
import { PRODUCT_CHECKOUT_STEPS } from "@/_mock/_product";
// routes
import { paths } from "@/routes/paths";
import { useRouter } from "@/routes/hooks";
// types
import { IAddressItem } from "@/types/address";
import { ICheckoutCartItem } from "@/types/product";

// ----------------------------------------------------------------------

export default function useProduct() {
  const dispatch = useDispatch();

  const router = useRouter();

  const { products, product, checkout, productsStatus, productStatus } =
    useSelector((state) => state.product);

  const completed = checkout.activeStep === PRODUCT_CHECKOUT_STEPS.length;

  const onNextStep = useCallback(() => {
    dispatch(nextStep());
  }, [dispatch]);

  const onBackStep = useCallback(() => {
    dispatch(backStep());
  }, [dispatch]);

  const onGotoStep = useCallback(
    (step: number) => {
      dispatch(gotoStep(step));
    },
    [dispatch]
  );

  const onDeleteCart = useCallback(
    (productId: string) => {
      dispatch(deleteCart(productId));
    },
    [dispatch]
  );

  const onIncreaseQuantity = useCallback(
    (productId: string) => {
      dispatch(increaseQuantity(productId));
    },
    [dispatch]
  );

  const onDecreaseQuantity = useCallback(
    (productId: string) => {
      dispatch(decreaseQuantity(productId));
    },
    [dispatch]
  );

  const onCreateBilling = useCallback(
    (address: IAddressItem) => {
      dispatch(createBilling(address));
      dispatch(nextStep());
    },
    [dispatch]
  );

  const onResetBilling = useCallback(() => {
    dispatch(createBilling(null));
  }, [dispatch]);

  const onAddCart = useCallback(
    (newProduct: ICheckoutCartItem) => {
      dispatch(addToCart(newProduct));
    },
    [dispatch]
  );

  const onApplyDiscount = useCallback(
    (value: number) => {
      if (checkout.cart.length) {
        dispatch(applyDiscount(value));
      }
    },
    [checkout.cart.length, dispatch]
  );

  const onApplyShipping = useCallback(
    (value: number) => {
      dispatch(applyShipping(value));
    },
    [dispatch]
  );

  const onResetAll = useCallback(() => {
    if (completed) {
      dispatch(resetCart());
      router.replace(paths.product.root);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completed]);

  return {
    products,
    product,
    checkout,
    completed,
    productsStatus,
    productStatus,
    //
    onResetAll,
    onAddCart,
    onGotoStep,
    onNextStep,
    onBackStep,
    onDeleteCart,
    onResetBilling,
    onCreateBilling,
    onApplyDiscount,
    onApplyShipping,
    onIncreaseQuantity,
    onDecreaseQuantity,
  };
}
