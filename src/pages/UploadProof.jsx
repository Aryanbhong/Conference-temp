
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Upload,
  CheckCircle2,
  FileText,
  AlertCircle,
  ArrowLeft,
  ShieldCheck,
  X,
  Copy,
  Check,
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';

const bankInfo = {
  accountNo: '520101005664868',
  ifscCode: 'UBIN0905721',
};

export function UploadPaymentProof() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: 'Author (Academic)',
    utrNumber: '',
    paymentDate: '',
    amountPaid: '',
    remarks: '',
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files?.[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files?.[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (file) => {
    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/jpg',
      'application/pdf',
    ];

    if (!allowedTypes.includes(file.type)) {
      alert('Invalid file format. Please upload a PDF, PNG, or JPG file.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('File size exceeds the 5MB limit.');
      return;
    }

    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert('Please attach your payment receipt or transaction screenshot.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const inputClass =
    'w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-xs font-medium text-slate-800 focus:border-[#1F3589] focus:outline-none focus:ring-1 focus:ring-[#1F3589]';

  const labelClass =
    'block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5';

  return (
    <div className="relative isolate min-h-screen bg-[#F8F5EC] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      {/* Background Lighting Aura */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#1F3589]/[0.05] blur-3xl opacity-70"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-[#E5A82B]/[0.1] blur-3xl opacity-70"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl space-y-7">
        {/* Navigation */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-[#1F3589] shadow-sm transition-all hover:border-[#1F3589] hover:bg-slate-50"
          >
            <ArrowLeft size={14} />
            Back to Bank Details
          </button>
        </div>

        {/* Section Heading */}
        <div className="text-center">
          <SectionHeading
            eyebrow="Payment Verification"
            title="Upload Bank Transfer Proof"
            subtitle="Please provide your transaction reference details and upload your remittance receipt below."
          />
        </div>

        {/* Bank Reference */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
          <div className="mb-3.5 flex items-center gap-2 text-[#1F3589]">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E5A82B]/20 text-[#855800]">
              <ShieldCheck size={16} />
            </div>

            <h3 className="font-serif text-xs font-bold uppercase tracking-wider">
              Remittance Account Reference
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-3">
              <div>
                <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Account Number
                </span>
                <span className="font-mono text-[11px] font-bold text-[#1F3589]">
                  {bankInfo.accountNo}
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(bankInfo.accountNo, 'acc')}
                className="rounded-md border border-slate-200 bg-white p-1.5 text-slate-500 shadow-sm transition-colors hover:border-[#1F3589] hover:text-[#1F3589]"
                title="Copy Account Number"
              >
                {copiedField === 'acc' ? (
                  <Check size={12} className="text-emerald-600" />
                ) : (
                  <Copy size={12} />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-3">
              <div>
                <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  IFSC Code
                </span>
                <span className="font-mono text-[11px] font-bold text-[#1F3589]">
                  {bankInfo.ifscCode}
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(bankInfo.ifscCode, 'ifsc')}
                className="rounded-md border border-slate-200 bg-white p-1.5 text-slate-500 shadow-sm transition-colors hover:border-[#1F3589] hover:text-[#1F3589]"
                title="Copy IFSC Code"
              >
                {copiedField === 'ifsc' ? (
                  <Check size={12} className="text-emerald-600" />
                ) : (
                  <Copy size={12} />
                )}
              </button>
            </div>

            <div className="flex items-center rounded-lg border border-slate-100 bg-slate-50 p-3">
              <div>
                <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Bank Name
                </span>
                <span className="text-[11px] font-bold text-slate-800">
                  Union Bank of India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        {isSuccess ? (
          /* Success Screen */
          <div className="rounded-xl border border-emerald-200 bg-white p-6 sm:p-8 text-center shadow-md">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-4 ring-emerald-50/50">
              <CheckCircle2 size={28} />
            </div>

            <h3
              className="font-serif text-xl font-bold text-[#1F3589]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Payment Proof Submitted Successfully
            </h3>

            <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-slate-600">
              Thank you,{' '}
              <strong className="text-slate-800">{formData.fullName}</strong>.
              Your transaction record (
              <span className="font-mono font-semibold text-[#1F3589]">
                UTR: {formData.utrNumber}
              </span>
              ) has been logged for review. An acknowledgment has been dispatched
              to{' '}
              <span className="font-medium text-slate-800">
                {formData.email}
              </span>.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-2.5 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  setSelectedFile(null);
                }}
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
              >
                Submit Another Receipt
              </button>

              <button
                type="button"
                onClick={() => navigate('/bank-details')}
                className="rounded-lg bg-[#1F3589] px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#101D4B]"
              >
                Return to Bank Details
              </button>
            </div>
          </div>
        ) : (
          /* Submission Form */
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm"
          >
            {/* Section 1: Delegate Information */}
            <div className="space-y-3.5">
              <div className="border-b border-slate-100 pb-2.5">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#855800]">
                  Step 1 of 3
                </span>

                <h3
                  className="font-serif text-base font-bold text-[#1F3589]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Delegate & Registration Information
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Prof. / Dr. / Mr. / Ms."
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@institution.edu"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Registration Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="Author (Academic)">Author (Academic / Faculty)</option>
                    <option value="Author (Industry)">Author (Industry Representative)</option>
                    <option value="Research Scholar / Student">Research Scholar / Student</option>
                    <option value="Attendee / Co-Author">Attendee / Co-Author Only</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Transaction Details */}
            <div className="space-y-3.5 pt-1">
              <div className="border-b border-slate-100 pb-2.5">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#855800]">
                  Step 2 of 3
                </span>

                <h3
                  className="font-serif text-base font-bold text-[#1F3589]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Transaction Details
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label className={labelClass}>
                    UTR / Ref No. <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="utrNumber"
                    required
                    value={formData.utrNumber}
                    onChange={handleChange}
                    placeholder="e.g. UIN123456789"
                    className={`${inputClass} font-mono`}
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Payment Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="paymentDate"
                    required
                    value={formData.paymentDate}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Amount Paid <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="amountPaid"
                    required
                    value={formData.amountPaid}
                    onChange={handleChange}
                    placeholder="e.g. ₹5,900"
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* Section 3: File Upload */}
            <div className="space-y-3.5 pt-1">
              <div className="border-b border-slate-100 pb-2.5">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#855800]">
                  Step 3 of 3
                </span>

                <h3
                  className="font-serif text-base font-bold text-[#1F3589]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Upload Transaction Proof
                </h3>
              </div>

              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center transition-all ${
                  isDragging
                    ? 'border-[#1F3589] bg-[#FEF7E6]'
                    : selectedFile
                    ? 'border-emerald-400 bg-emerald-50/40'
                    : 'border-slate-200 bg-slate-50/60 hover:border-[#1F3589] hover:bg-slate-50'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg"
                  onChange={handleFileChange}
                  className="hidden"
                />

                {selectedFile ? (
                  <div className="flex items-center gap-3 text-emerald-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                      <FileText size={20} />
                    </div>

                    <div className="text-left">
                      <p className="text-xs font-bold">{selectedFile.name}</p>
                      <p className="text-[11px] text-slate-500">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB • Ready for upload
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedFile(null);
                      }}
                      className="ml-2 rounded-full p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-700"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-2.5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F3589]/10 text-[#1F3589]">
                      <Upload size={22} />
                    </div>

                    <p className="text-xs font-bold text-slate-800">
                      Click to browse or drag and drop your receipt
                    </p>

                    <p className="mt-1 text-[11px] font-medium text-slate-500">
                      Accepted formats: PDF, PNG, JPG (Maximum file size: 5MB)
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-5 sm:flex-row">
              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                <AlertCircle size={13} className="shrink-0 text-[#855800]" />
                <span>Verification typically requires 24–48 business hours.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1F3589] px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#101D4B] hover:shadow-md disabled:bg-slate-400 sm:w-auto"
              >
                {isSubmitting ? 'Uploading Record...' : 'Submit Payment Proof'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default UploadPaymentProof;