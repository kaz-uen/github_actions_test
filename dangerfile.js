/* eslint-disable node/no-unpublished-require */
const { danger, warn } = require("danger");

const totalLinesChanged = danger.github.pr.additions + danger.github.pr.deletions;
const filesChanged = danger.git.modified_files.length + danger.git.created_files.length + danger.git.deleted_files.length;

// 200行以上の追加・削除の変更があったかどうか
if (totalLinesChanged > 200) {
  warn(`合計 ${totalLinesChanged} 行が変更されています。200行以上の追加・削除は違反です!`);
}

// 変更したファイルの数が10より多いかどうか
if (filesChanged > 10) {
  warn(`合計 ${filesChanged} ファイルが変更されています。10ファイル以上の変更は違反です!`);
}
