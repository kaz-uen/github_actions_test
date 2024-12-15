import { danger, warn } from "danger";

// 500行以上の追加・削除の変更があったかどうか
const diffSize = Math.max(danger.github.pr.additions, danger.github.pr.deletions);
if (diffSize > 200) {
  warn("Should reduce diffs less than 500");
  isAllCheckPassed = false;
}

// 変更したファイルの数が10より多いかどうか
if (danger.github.pr.changed_files > 1 ) {
  warn("Should reduce change files less than 10");
  isAllCheckPassed = false;
}
