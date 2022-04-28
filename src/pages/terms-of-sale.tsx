function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto prose prose-blue">
      <h2 className="dark:text-gray-200">What&apos;s your return policy?</h2>
      <p className="dark:text-gray-300">
        We don&apos;t offer returns and exchanges, but if there&apos;s something
        wrong with your order, please let us know by contacting us at{" "}
        <code className="dark:text-gray-100">support@fyralabs.com</code>!
      </p>

      <h2 className="dark:text-gray-200">Do you offer refunds?</h2>
      <p className="dark:text-gray-300">
        Refunds are only offered to customers that receive the wrong items or
        damaged items. If any of these apply, please contact us at{" "}
        <code className="dark:text-gray-100">support@fyralabs.com</code> with
        photos of wrong/damaged items and we&apos;ll sort that out for you.
      </p>

      <h2 className="dark:text-gray-200">
        Can I exchange an item for a different size/color?
      </h2>
      <p className="dark:text-gray-300">
        At this time, we don&apos;t offer exchanges. If you&apos;re unsure which
        size would fit better, check out our sizing charts—we have one for every
        item listed on our store, in the product description section. Though
        rare, it&apos;s possible that an item you ordered was mislabelled. If
        that&apos;s the case, please let us know at{" "}
        <code className="dark:text-gray-100">support@fyralabs.com</code> within
        a week after receiving your order. Include your order number and photos
        of the mislabeled item, and we&apos;ll send you a new one, or issue a
        refund!
      </p>
    </div>
  );
}

export default TermsPage;
