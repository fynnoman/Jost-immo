import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/ServiceTemplate";
import { SERVICES, getService } from "@/lib/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return { title: "Service" };
  return {
    title: svc.label,
    description: svc.lead,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return notFound();
  return <ServiceTemplate service={svc} />;
}
