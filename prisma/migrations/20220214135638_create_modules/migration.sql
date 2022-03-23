/*
  Warnings:

  - Added the required column `fk_id_course` to the `modules` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "modules" ADD COLUMN     "fk_id_course" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "modules" ADD CONSTRAINT "modules_fk_id_course_fkey" FOREIGN KEY ("fk_id_course") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
