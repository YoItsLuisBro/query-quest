import MistakeCard from "../components/cards/MistakeCard";
import ReviewQueueCard from "../components/cards/ReviewQueueCard";
import UserMistakeCard from "../components/mistakes/UserMistakeCard";
import UserMistakeForm from "../components/mistakes/UserMistakeForm";
import PageShell from "../components/ui/PageShell";
import ProgressBar from "../components/ui/ProgressBar";
import TerminalPanel from "../components/ui/TerminalPanel";
import { mistakes } from "../data/mistakes";
import { useReviewQueue } from "../hooks/useReviewQueue";
import { useUserMistakes } from "../hooks/useUserMistakes";

export default function MistakeJournalPage() {
  const reviewQueue = useReviewQueue();
  const userMistakes = useUserMistakes();
  const visibleReviewItems = reviewQueue.items.slice(0, 12);

  return (
    <PageShell
      eyebrow="Mistake Journal"
      title="Review Queue"
      description="Track unfinished challenges, review weak spots, and save SQL mistakes before they become habits."
    >
      <div className="space-y-8">
        <section className="grid gap-6 md:grid-cols-3">
          <TerminalPanel
            eyebrow="Queue Total"
            title={`${reviewQueue.totalItems}`}
            accent="amber"
          >
            <p className="text-sm leading-6 text-slate-300">
              Automatic review items generated from saved local progress.
            </p>
          </TerminalPanel>

          <TerminalPanel
            eyebrow="In Progress"
            title={`${reviewQueue.inProgressItems}`}
            accent="cyan"
          >
            <p className="text-sm leading-6 text-slate-300">
              Challenges where you started an answer but have not completed it.
            </p>
          </TerminalPanel>

          <TerminalPanel
            eyebrow="Saved Mistakes"
            title={`${userMistakes.length}`}
            accent="rose"
          >
            <p className="text-sm leading-6 text-slate-300">
              Manually saved SQL mistakes from this browser.
            </p>
          </TerminalPanel>
        </section>

        <UserMistakeForm />

        {userMistakes.length > 0 ? (
          <>
            <TerminalPanel
              eyebrow="Personal Mistakes"
              title="Your Saved SQL Mistakes"
              accent="rose"
            >
              <p className="text-sm leading-6 text-slate-300">
                These are saved locally in your browser. Use them to review
                errors you personally made while practicing SQL.
              </p>
            </TerminalPanel>

            <section className="grid gap-6 lg:grid-cols-2">
              {userMistakes.map((mistake) => (
                <UserMistakeCard key={mistake.id} mistake={mistake} />
              ))}
            </section>
          </>
        ) : null}

        <TerminalPanel
          eyebrow="Automatic Queue"
          title="Incomplete Challenge Review"
          accent="amber"
        >
          <div className="space-y-5">
            <ProgressBar
              value={reviewQueue.inProgressItems}
              max={Math.max(1, reviewQueue.totalItems)}
              label="Started Review Items"
            />

            <p className="text-sm leading-6 text-slate-300">
              This queue updates automatically when you complete, reset, or save
              challenge progress.
            </p>
          </div>
        </TerminalPanel>

        <section className="grid gap-6 lg:grid-cols-2">
          {visibleReviewItems.map((item) => (
            <ReviewQueueCard key={item.id} item={item} />
          ))}
        </section>

        {reviewQueue.items.length > visibleReviewItems.length ? (
          <TerminalPanel
            eyebrow="Queue Limit"
            title="More Items Available"
            accent="cyan"
          >
            <p className="text-sm leading-6 text-slate-300">
              Showing the first {visibleReviewItems.length} review items out of{" "}
              {reviewQueue.items.length}. Complete a few lessons to shrink the
              queue.
            </p>
          </TerminalPanel>
        ) : null}

        <TerminalPanel
          eyebrow="Preloaded Mistakes"
          title="Common SQL Mistake Examples"
          accent="violet"
        >
          <p className="text-sm leading-6 text-slate-300">
            These are built-in examples to help users recognize common SQL
            errors.
          </p>
        </TerminalPanel>

        <section className="grid gap-6 lg:grid-cols-2">
          {mistakes.map((mistake) => (
            <MistakeCard key={mistake.id} mistake={mistake} />
          ))}
        </section>
      </div>
    </PageShell>
  );
}
