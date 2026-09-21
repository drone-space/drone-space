-- CreateTable
CREATE TABLE "srpls" (
    "id" TEXT NOT NULL,
    "srpl_number" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "sync_status" "SyncStatus" NOT NULL DEFAULT 'SYNCED',
    "profile_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "srpls_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "srpls_profile_id_key" ON "srpls"("profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "srpls_srpl_number_key" ON "srpls"("srpl_number");

-- AddForeignKey
ALTER TABLE "srpls" ADD CONSTRAINT "srpls_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
