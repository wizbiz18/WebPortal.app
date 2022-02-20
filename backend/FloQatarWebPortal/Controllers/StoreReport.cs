namespace FloQatarWebPortal.Controllers
{
    public class StoreReport
    {
        public StoreReport()
        {
        }

        public decimal NetAmount { get; set; }
        public string Date { get; set; }
        public double QTY { get; set; }
        public double InvoiceCount { get; set; }
        public string VistorCount { get; set; }
        public string Day { get; set; }
        public double AvargeTransValue { get; set; }
        public double AvarageTransUnite { get; set; }
        public string VistorConversationRate { get; set; }

    }
}