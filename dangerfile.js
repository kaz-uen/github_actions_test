const { danger, warn } = require("danger");

const totalLinesChanged = danger.git.linesAdded + danger.git.linesDeleted;
const filesChanged = danger.git.modified_files.length + danger.git.created_files.length + danger.git.deleted_files.length;

// 200行以上の追加・削除の変更があったかどうか
if (totalLinesChanged > 200) {
  warn(`合計 ${totalLinesChanged} 行が変更されています！200行を超えています。`);
}

// 変更したファイルの数が1より多いかどうか
if (filesChanged > 1) {
  warn(`合計 ${filesChanged} ファイルが変更されています！10ファイルを超えています。`);
}
