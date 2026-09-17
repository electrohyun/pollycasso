import { useNudgeListener } from '@/features/lobby';
import { BackButton } from '@/features/navigate-back';
import { useShop } from '@/features/shop';
import { ShopProductList, ShopProfilePanel, ShopSidebar } from '@/widgets/shop';

const ShopPage = () => {
  useNudgeListener();

  const {
    user,
    myInventoryIds,
    cart,
    addToCart,
    removeFromCart,
    shopFilter,
    shopPreview,
    processedProducts,
    handlePurchase,
    isPurchasing,
  } = useShop();

  return (
    <div className="flex items-center justify-center w-full min-h-screen gap-[24px] font-ssrm font-bold">
      <BackButton />

      <ShopSidebar
        isSortOpen={shopFilter.isSortOpen}
        activeSort={shopFilter.activeSort}
        activeSortLabel={shopFilter.activeSortLabel}
        activeCategory={shopFilter.activeCategory}
        onToggleSort={shopFilter.toggleSortOpen}
        onSortChange={shopFilter.handleSortChange}
        onCategoryChange={shopFilter.handleCategoryChange}
      />

      <ShopProductList
        products={processedProducts}
        cart={cart}
        inventoryIds={myInventoryIds}
        onAddToCart={addToCart}
        onWearItem={shopPreview.wearItem}
      />

      <ShopProfilePanel
        cart={cart}
        previewItems={shopPreview.previewItems}
        userBalance={user?.coin ?? 0}
        userLevel={user?.level ?? 1}
        onRemoveFromCart={removeFromCart}
        onResetPreview={shopPreview.resetPreview}
        onPurchase={handlePurchase}
        isPurchasing={isPurchasing}
      />
    </div>
  );
};

export default ShopPage;
