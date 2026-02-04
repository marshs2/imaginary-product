import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import ProductAssessmentDashboard from './pages/product-assessment-dashboard';
import ProductDetailView from './pages/product-detail-view';
import UserAuthentication from './pages/user-authentication';
import ShoppingCartManagement from './pages/shopping-cart-management';
import Ebook from './pages/e-book';
import Library from './pages/Library';
import { AssessmentProgressProvider } from './components/ui/AssessmentProgress';
import { CartContext, useCart } from "components/useCart";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <AssessmentProgressProvider>
      <ScrollToTop />
      <CartContext.Provider value={useCart()}>
        <RouterRoutes>
          <Route path="/" element={<ProductAssessmentDashboard />} />
          <Route path="/product-assessment-dashboard" element={<ProductAssessmentDashboard />} />
          <Route path="/product-detail-view" element={<ProductDetailView />} />
          <Route path="/user-authentication" element={<UserAuthentication />} />
          <Route path="/shopping-cart-management" element={<ShoppingCartManagement />} />
          <Route path="/e-book" element={<Ebook />} />
          <Route path="/Library" element={<Library />} />
        </RouterRoutes>
      </CartContext.Provider>
      </AssessmentProgressProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;