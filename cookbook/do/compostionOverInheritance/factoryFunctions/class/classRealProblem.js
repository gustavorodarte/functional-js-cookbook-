class NotificationServices {
  constructor({
    mailers,
  }) {
    this.mailers = mailers;
  }

  get statusMailerMethodMap() {
    return {
      CANCELLED: this.mailers.sendTransactionCanceledEmail,
      DELIVERED: this.mailers.sendTransactionDeliveredEmail,
      MANUAL_ANALYSIS: this.mailers.sendTransactionReservationEmail,
      PROCESSING: () => true,
      PAYMENT_APPROVED: this.mailers.sendTransactionPaymentApprovedEmail,
    };
  }

  async sendTransactionStatusUpdateByMailer(transaction) {
    const mailerMethodToCall = this
      .statusMailerMethodMap[transaction.status.key]
      .bind(this.mailers);

    await mailerMethodToCall(transaction);
  }
}

module.exports = NotificationServices;
