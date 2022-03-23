-- CreateTable
CREATE TABLE "studants" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "studants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studants_courses" (
    "id" TEXT NOT NULL,
    "fk_studant_id" TEXT NOT NULL,
    "fk_course_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "studants_courses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "studants_courses" ADD CONSTRAINT "studants_courses_fk_studant_id_fkey" FOREIGN KEY ("fk_studant_id") REFERENCES "studants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studants_courses" ADD CONSTRAINT "studants_courses_fk_course_id_fkey" FOREIGN KEY ("fk_course_id") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
