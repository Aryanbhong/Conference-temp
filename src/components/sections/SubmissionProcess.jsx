
import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { Stepper } from "../ui/Stepper";

const steps = [
  {
    id: 1,
    title: "Create account",
    description: "Register on the paper submission portal",
    isHighlighted: false,
  },
  {
    id: 2,
    title: "Submit paper",
    description: "Upload your paper in the prescribed format",
    isHighlighted: false,
  },
  {
    id: 3,
    title: "Review & acceptance",
    description: "Intimation within one week of submission",
    isHighlighted: false,
  },
  {
    id: 4,
    title: "Register & present",
    description: "Pay the fee and present at the conference",
    isHighlighted: true,
  },
];

export function SubmissionProcess() {
  return (
    <section
      aria-labelledby="submission-process-heading"
      className="relative isolate overflow-hidden px-4 py-14 sm:px-6 md:px-8 md:py-16"
      style={{ background: "var(--color-white)" }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full blur-[100px]"
        style={{ background: "rgba(31, 53, 137, 0.12)" }}
      />

      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full blur-[110px]"
        style={{ background: "rgba(229, 168, 43, 0.20)" }}
      />

      {/* Decorative glowing line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute left-1/2 top-0 h-[2px] w-2/3 -translate-x-1/2 origin-center"
        style={{
          background:
            "linear-gradient(90deg, transparent, #E5A82B, #1F3589, transparent)",
          boxShadow: "0 0 18px rgba(229, 168, 43, 0.45)",
        }}
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 md:gap-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <SectionHeading
            title="Submission process"
            id="submission-process-heading"
          />

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-4 h-[3px] rounded-full"
            style={{
              background: "linear-gradient(90deg, #1F3589, #E5A82B)",
              boxShadow: "0 0 14px rgba(229, 168, 43, 0.4)",
            }}
          />
        </motion.div>

        {/* Stepper container */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full rounded-2xl border p-4 sm:p-5 md:p-7"
          style={{
            background: "rgba(255, 255, 255, 0.72)",
            borderColor: "rgba(31, 53, 137, 0.12)",
            boxShadow:
              "0 20px 60px rgba(31, 53, 137, 0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Top label */}
          <div className="mb-6 flex items-center justify-between sm:mb-7">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.25em] sm:text-xs"
              style={{ color: "#1F3589" }}
            >
              Your journey
            </span>

            <span
              className="rounded-full border px-3 py-1 text-[10px] font-semibold sm:px-4 sm:py-1.5 sm:text-xs"
              style={{
                color: "#B8860B",
                background: "rgba(229, 168, 43, 0.08)",
                borderColor: "rgba(229, 168, 43, 0.3)",
              }}
            >
              4 simple steps
            </span>
          </div>

          {/* Existing Stepper */}
          <div className="relative z-10">
            <Stepper steps={steps} className="w-full" />
          </div>

          {/* Bottom glowing accent */}
          <motion.div
            animate={{
              opacity: [0.35, 0.8, 0.35],
              scaleX: [0.85, 1, 0.85],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto mt-7 h-[2px] w-2/3 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #E5A82B, #1F3589, transparent)",
              boxShadow: "0 0 15px rgba(229, 168, 43, 0.4)",
            }}
          />
        </motion.div>

        {/* Footer message */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-lg text-center text-xs leading-6 sm:text-sm sm:leading-7"
          style={{ color: "rgba(31, 53, 137, 0.7)" }}
        >
          From submitting your research to presenting your ideas,
          <span className="font-semibold" style={{ color: "#B8860B" }}>
            {" "}every step brings you closer{" "}
          </span>
          to the conference.
        </motion.p>
      </div>
    </section>
  );
}

export default SubmissionProcess;