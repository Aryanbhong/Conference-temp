
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  CreditCard, 
  Hash, 
  FileCode, 
  MapPin, 
  Copy, 
  Check, 
  ShieldCheck,
  Info,
  ArrowRight
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const bankInfo = {
  accountName: 'SIES COLLEGE OF MANAGEMENT STUDIES / V SHANKAR / VISWANATHAN S.',
  bankName: 'Union Bank of India',
  accountNo: '520101005664868',
  ifscCode: 'UBIN0905721',
  branch: 'Nerul, Navi Mumbai',
};

export function BankDetails() {
  const navigate = useNavigate();
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldKey) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldKey);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const detailsList = [
    { key: 'accountName', label: 'Account Name', value: bankInfo.accountName, icon: Building2, isCopyable: true, isMono: false },
    { key: 'bankName', label: 'Bank Name', value: bankInfo.bankName, icon: CreditCard, isCopyable: false, isMono: false },
    { key: 'accountNo', label: 'Account Number', value: bankInfo.accountNo, icon: Hash, isCopyable: true, isMono: true },
    { key: 'ifscCode', label: 'IFSC Code', value: bankInfo.ifscCode, icon: FileCode, isCopyable: true, isMono: true },
    { key: 'branch', label: 'Branch Location', value: bankInfo.branch, icon: MapPin, isCopyable: false, isMono: false },
  ];

  return (
    <section id="bank-details" className="bg-[#F8F5EC] px-4 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10">
        <div className="max-w-3xl text-center">
          <SectionHeading
            title="Official Bank Account Details"
            subtitle="Participants paying via NEFT, RTGS, or IMPS direct bank transfer must remit registration fees to the official college account below."
          />
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-[#1F3589] px-6 py-5 text-white sm:px-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={20} className="text-[#E5A82B]" />
                <h3 className="font-serif text-lg font-bold text-white">SIESCOMS Conference Account Credentials</h3>
              </div>
              <span className="text-xs text-slate-200">Mode: NEFT / RTGS / IMPS</span>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {detailsList.map((item, idx) => {
              const Icon = item.icon;
              const isCopied = copiedField === item.key;

              return (
                <div
                  key={item.key}
                  className={`flex flex-col justify-between gap-2 px-6 py-4 transition-colors sm:flex-row sm:items-center sm:px-8 ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                  }`}
                >
                  <div className="flex items-center gap-3 sm:w-2/5">
                    <Icon size={16} className="shrink-0 text-[#1F3589]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600">{item.label}</span>
                  </div>

                  <div className="flex flex-1 items-center justify-between gap-4 sm:justify-end">
                    <span className={`text-sm font-semibold text-slate-900 ${item.isMono ? 'font-mono tracking-tight text-[#1F3589]' : ''}`}>
                      {item.value}
                    </span>

                    {item.isCopyable && (
                      <button
                        type="button"
                        onClick={() => handleCopy(item.value, item.key)}
                        className="inline-flex shrink-0 items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-2xs hover:border-[#1F3589] hover:bg-slate-50"
                      >
                        {isCopied ? (
                          <>
                            <Check size={13} className="text-emerald-600" />
                            <span className="text-emerald-700 font-semibold">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy size={13} className="text-slate-400" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-t border-slate-200 bg-[#FEF7E6]/60 p-6 sm:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Info size={18} className="mt-0.5 shrink-0 text-[#855800]" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#855800]">Mandatory Submission Requirement</h4>
                  <p className="text-xs leading-relaxed text-slate-600">
                    After completing the wire transfer, save your transaction UTR / Reference number and upload the payment receipt via our verification portal.
                  </p>
                </div>
              </div>

              {/* React Router Navigation Button */}
              <button
                type="button"
                onClick={() => navigate('/upload-payment-proof')}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#1F3589] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#101D4B] hover:gap-3"
              >
                <span>Submit Proof of Payment</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BankDetails;