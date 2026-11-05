
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
  ArrowRight,
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
    <section
      id="bank-details"
      className="bg-[#F8F5EC] px-4 py-12 sm:px-6 sm:py-14 lg:px-8"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-7">
        <div className="max-w-2xl text-center">
          <SectionHeading
            title="Official Bank Account Details"
            subtitle="Participants paying via NEFT, RTGS, or IMPS direct bank transfer must remit registration fees to the official college account below."
          />
        </div>

        <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {/* Header */}
          <div className="border-b border-slate-200 bg-[#1F3589] px-4 py-4 text-white sm:px-5">
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck size={17} className="shrink-0 text-[#E5A82B]" />

                <h3 className="font-serif text-sm font-bold text-white sm:text-base">
                  SIESCOMS Conference Account Credentials
                </h3>
              </div>

              <span className="text-[10px] text-slate-200 sm:text-xs">
                Mode: NEFT / RTGS / IMPS
              </span>
            </div>
          </div>

          {/* Bank Details */}
          <div className="divide-y divide-slate-100">
            {detailsList.map((item, idx) => {
              const Icon = item.icon;
              const isCopied = copiedField === item.key;

              return (
                <div
                  key={item.key}
                  className={`flex flex-col justify-between gap-2.5 px-4 py-3 transition-colors sm:flex-row sm:items-center sm:px-5 ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:w-2/5">
                    <Icon size={14} className="shrink-0 text-[#1F3589]" />

                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 sm:text-xs">
                      {item.label}
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-1 items-center justify-between gap-3 sm:justify-end">
                    <span
                      className={`min-w-0 break-words text-xs font-semibold text-slate-900 sm:text-sm ${
                        item.isMono
                          ? 'font-mono tracking-tight text-[#1F3589]'
                          : ''
                      }`}
                    >
                      {item.value}
                    </span>

                    {item.isCopyable && (
                      <button
                        type="button"
                        onClick={() => handleCopy(item.value, item.key)}
                        className="inline-flex shrink-0 items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] font-medium text-slate-700 shadow-2xs hover:border-[#1F3589] hover:bg-slate-50 sm:text-xs"
                      >
                        {isCopied ? (
                          <>
                            <Check size={11} className="text-emerald-600" />
                            <span className="font-semibold text-emerald-700">
                              Copied
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy size={11} className="text-slate-400" />
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

          {/* Submission Requirement */}
          <div className="border-t border-slate-200 bg-[#FEF7E6]/60 p-4 sm:p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-2.5">
                <Info size={15} className="mt-0.5 shrink-0 text-[#855800]" />

                <div className="space-y-1">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#855800] sm:text-xs">
                    Mandatory Submission Requirement
                  </h4>

                  <p className="text-[11px] leading-relaxed text-slate-600 sm:text-xs">
                    After completing the wire transfer, save your transaction UTR / Reference number and upload the payment receipt via our verification portal.
                  </p>
                </div>
              </div>

              {/* React Router Navigation Button */}
              <button
                type="button"
                onClick={() => navigate('/upload-payment-proof')}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#1F3589] px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#101D4B] hover:gap-3 sm:text-xs"
              >
                <span>Submit Proof of Payment</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BankDetails;
