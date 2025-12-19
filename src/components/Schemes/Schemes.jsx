

const schemes = [
  {
    title:
      "Pradhan Mantri Matsya Sampada Yojana: Medium Scale Ornamental Fish Rearing Unit (Fresh Water) - Haryana",
    subtitle: "Haryana",
    description:
      "Subsidy for eligible beneficiaries to set up infrastructure for ornamental fish—sheds, breeding, and tanks.",
    tags: [
      "Fish",
      "Fish Farmer",
      "Fish Production",
      "Fish Rearing Unit",
      "Fresh Water",
      "Ornamental Aquaculture",
      "Subsidy",
    ],
    state: "Haryana",
    occupation: ["Fish Farmer"],
  },
  {
    title: "Prime Minister’s Fellowship for Doctoral Research",
    subtitle: "Ministry Of Science And Technology",
    description:
      "Fellowship scheme by SERB for university-industry research collaboration in science & engineering.",
    tags: ["Doctoral", "Fellowship", "PhD", "Research", "SERB"],
    state: "All India",
    occupation: ["Researcher", "Student"],
  },
  {
    title:
      "Pradhan Mantri Uchchatar Shiksha Protsahan (PM-USP) Central Sector Scheme of Scholarship",
    subtitle: "Ministry of Education",
    description:
      "Financial assistance for college/university students from poor families—based on Class 12th board results.",
    tags: ["College", "Financial Assistance", "Scholarship", "Student", "University"],
    state: "All India",
    occupation: ["Student"],
  },
  {
    title:
      "PM-KISAN: Pradhan Mantri Kisan Samman Nidhi",
    subtitle: "Ministry of Agriculture & Farmers Welfare",
    description:
      "Income support of ₹6000/year in three installments to all landholding farmer families to supplement financial needs.",
    tags: ["PM-KISAN", "Cash Benefit", "Farmer", "Income Support"],
    state: "All India",
    occupation: ["Farmer"],
  },
  {
    title: "Kisan Credit Card (KCC) Scheme",
    subtitle: "Ministry of Agriculture & Farmers Welfare",
    description:
      "Enables farmers to purchase agriculture inputs and draw cash for their production needs; easy loan and insurance.",
    tags: ["KCC", "Agriculture", "Credit", "Loan", "Insurance"],
    state: "All India",
    occupation: ["Farmer"],
  },
  {
    title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    subtitle: "Ministry of Agriculture & Farmers Welfare",
    description:
      "Crop insurance scheme for farmers—the government bears a major part of the premium. Covers yield loss, unseasonal weather, etc.",
    tags: ["PMFBY", "Crop Insurance", "Weather Loss", "Farmer"],
    state: "All India",
    occupation: ["Farmer"],
  },
  {
    title: "National Mission on Agricultural Extension & Technology (NMAET)",
    subtitle: "Ministry of Agriculture & Farmers Welfare",
    description:
      "Focus on farmer education & support extension tech—funding for agri-extension, plant clinics, ICT for farmers.",
    tags: ["Extension", "Farmer Education", "Plant Clinic", "ICT"],
    state: "All India",
    occupation: ["Farmer", "Agriculture Extension Worker"],
  },
  {
    title: "Soil Health Card Scheme",
    subtitle: "Ministry of Agriculture & Farmers Welfare",
    description:
      "Provides farmers a soil health card every two years for each field, giving nutrient status and fertilizer recommendations.",
    tags: ["Soil Health", "Recommendations", "Farmer"],
    state: "All India",
    occupation: ["Farmer"],
  },
  {
    title: "Per Drop More Crop",
    subtitle: "Ministry of Agriculture & Farmers Welfare",
    description:
      "Promotion of efficient water use in irrigation through micro-irrigation (drip, sprinkler, etc.), with subsidy for installation.",
    tags: ["Water Saving", "Micro-Irrigation", "Subsidy", "Farmer", "Irrigation"],
    state: "All India",
    occupation: ["Farmer"],
  },
  {
    title: "Paramparagat Krishi Vikas Yojana (PKVY)",
    subtitle: "Ministry of Agriculture & Farmers Welfare",
    description:
      "Support for organic farming clusters and certification; assistance for marketing and input procurement.",
    tags: ["Organic Farming", "Cluster", "Certification", "Assistance"],
    state: "All India",
    occupation: ["Farmer", "Organic Farmer"],
  },
  {
    title: "Mukhyamantri Krishi Ashirwad Yojana",
    subtitle: "Jharkhand",
    description:
      "₹5000/acre financial assistance for small and marginal farmers for kharif crops.",
    tags: ["Krishi Ashirwad", "Jharkhand", "Farmer", "Subsidy"],
    state: "Jharkhand",
    occupation: ["Farmer"],
  },
  {
    title: "Yuva Sahakar: Cooperative Enterprise Support and Innovation Scheme",
    subtitle: "National Cooperative Development Corporation",
    description:
      "Promotes innovative startups and cooperatives in the agricultural sector led by youth.",
    tags: ["Startup", "Cooperative", "Youth", "Agriculture"],
    state: "All India",
    occupation: ["Farmer", "Entrepreneur", "Startup"],
  },
  {
    title: "Rashtriya Krishi Vikas Yojana (RKVY)",
    subtitle: "Ministry of Agriculture & Farmers Welfare",
    description:
      "Accelerated agricultural development by incentivizing states to increase investment in agriculture and allied sectors.",
    tags: ["RKVY", "Agricultural Investment", "State", "Farmer"],
    state: "All India",
    occupation: ["Farmer"],
  },
  {
    title: "Livestock Insurance Scheme",
    subtitle: "Department of Animal Husbandry & Dairying",
    description:
      "Subsidized insurance for cattle and other livestock to protect farmers from financial loss.",
    tags: ["Insurance", "Livestock", "Farmer", "Cattle"],
    state: "All India",
    occupation: ["Farmer", "Dairy Farmer"],
  },
];

import React, { useState, useMemo } from "react";


/* ---------------- OPTIONS ---------------- */

const stateOptions = ["All", "Haryana", "Jharkhand", "All India"];

const occupationOptions = [
  "All",
  "Farmer",
  "Fish Farmer",
  "Student",
  "Researcher",
  "Organic Farmer",
  "Entrepreneur",
  "Startup",
  "Dairy Farmer",
  "Agriculture Extension Worker",
];

/* ---------------- SIDEBAR ---------------- */

function SidebarFilter({ filters, onFilterChange, onReset, occupationCounts }) {
  return (
    <aside className="w-[340px] bg-white border-r h-screen sticky top-0 overflow-y-auto">
      <div className="p-6 space-y-8">
        {/* HEADER */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-700">
            Scheme Filters
          </h2>
          <p className="text-sm text-gray-500">
            Find schemes relevant to you
          </p>
        </div>

        {/* STATE */}
        <FilterSelect
          label="State"
          value={filters.state}
          options={stateOptions}
          onChange={(v) => onFilterChange("state", v)}
        />

        {/* AGE */}
        <FilterInput
          label="Age"
          value={filters.age}
          onChange={(v) => onFilterChange("age", v)}
        />

        {/* DISABILITY */}
        <FilterInput
          label="Disability (%)"
          value={filters.disability}
          onChange={(v) => onFilterChange("disability", v)}
        />

        {/* OCCUPATION */}
        <FilterSelect
          label="Occupation"
          value={filters.occupation}
          options={occupationOptions}
          onChange={(v) => onFilterChange("occupation", v)}
        />

        {/* MULTI OCCUPATION */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-3">
            Occupation (Multiple)
          </h4>
          <div className="space-y-2">
            {Object.entries(occupationCounts).map(([occ, count]) => (
              <label
                key={occ}
                className="flex items-center justify-between text-sm text-gray-600 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.occupationChecks[occ] || false}
                    onChange={() =>
                      onFilterChange("occupationChecks", occ)
                    }
                    className="accent-emerald-600"
                  />
                  {occ}
                </div>
                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                  {count}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* RESET */}
        <button
          onClick={onReset}
          className="w-full py-2 rounded-lg border border-emerald-600 text-emerald-700 font-semibold hover:bg-emerald-50 transition"
        >
          Reset Filters
        </button>
      </div>
    </aside>
  );
}

/* ---------------- INPUTS ---------------- */

function FilterSelect({ label, value, options, onChange }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500"
      >
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function FilterInput({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500"
      />
    </div>
  );
}

/* ---------------- CARD ---------------- */

function SchemeCard({ scheme }) {
  return (
    <article className="m-4 bg-white rounded-xl border shadow-sm hover:shadow-md transition p-6 space-y-4">
      <div>
        <h3 className="text-xl font-semibold text-emerald-800">
          {scheme.title}
        </h3>
        <p className="text-sm text-gray-500 font-medium">
          {scheme.subtitle}
        </p>
      </div>

      <p className="text-gray-700 leading-relaxed">
        {scheme.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {scheme.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

/* ---------------- MAIN PAGE ---------------- */

export default function SchemesPage() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    state: "All",
    age: "",
    disability: "",
    occupation: "All",
    occupationChecks: {},
  });

  const occupationCounts = useMemo(() => {
    const counts = {};
    schemes.forEach((s) =>
      (s.occupation || []).forEach(
        (o) => (counts[o] = (counts[o] || 0) + 1)
      )
    );
    return counts;
  }, []);

  function handleFilterChange(key, value) {
    if (key === "occupationChecks") {
      setFilters((prev) => ({
        ...prev,
        occupationChecks: {
          ...prev.occupationChecks,
          [value]: !prev.occupationChecks[value],
        },
      }));
    } else {
      setFilters((prev) => ({ ...prev, [key]: value }));
    }
  }

  function handleReset() {
    setFilters({
      state: "All",
      age: "",
      disability: "",
      occupation: "All",
      occupationChecks: {},
    });
    setSearch("");
  }

  const filteredSchemes = useMemo(() => {
    return schemes.filter((s) => {
      const text = `${s.title} ${s.description}`.toLowerCase();
      if (search && !text.includes(search.toLowerCase())) return false;
      if (filters.state !== "All" && s.state !== filters.state) return false;
      if (
        filters.occupation !== "All" &&
        !s.occupation.includes(filters.occupation)
      )
        return false;

      const checked = Object.keys(filters.occupationChecks).filter(
        (k) => filters.occupationChecks[k]
      );
      if (checked.length && !checked.some((o) => s.occupation.includes(o)))
        return false;

      return true;
    });
  }, [search, filters]);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <SidebarFilter
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={handleReset}
        occupationCounts={occupationCounts}
      />

      <main className="flex-1 p-10 space-y-8">
        {/* SEARCH */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search government schemes…"
          className="w-full max-w-2xl px-4 py-3 rounded-xl border focus:ring-2 focus:ring-emerald-500"
        />

        {/* LIST */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredSchemes.length ? (
            filteredSchemes.map((s, i) => (
              <SchemeCard key={i} scheme={s} />
            ))
          ) : (
            <p className="text-red-600 font-semibold text-lg">
              No matching schemes found.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

