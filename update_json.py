import json

with open("src/data/service-contact.json", "r") as f:
    data = json.load(f)

slugs = [
    ("mr-market-landscape-opportunity", "Market Landscape & Opportunity Mapping", "Identify white spaces and lucrative market segments with precision.", "Market Research"),
    ("mr-competitive-intelligence", "Competitive Intelligence & Benchmarking", "Gain a definitive edge by understanding your rivals' moves.", "Market Research"),
    ("mr-buyer-persona-sentiment", "Buyer Persona & Sentiment Discovery", "Move beyond demographics to understand 'The Why' behind decisions.", "Market Research"),
    ("mr-product-validation-concept", "Product Validation & Concept Testing", "Reduce launch risk by testing ideas before you build.", "Market Research"),
    ("mr-attribution-modeling-cx", "Attribution Modeling & CX Analytics", "Map the complete buyer journey to maximize marketing impact.", "Market Research"),
    ("cm-full-funnel-content", "Full-Funnel Content Creation", "Content designed to build authority and drive organic growth.", "Content Marketing"),
    ("cm-strategic-email-nurture", "Strategic Email Nurture & Distribution", "Ensure your thought leadership reaches the right inbox.", "Content Marketing"),
    ("cm-data-driven-seo", "Data-Driven SEO & Roadmap Planning", "Achieve long-term visibility with a precise content roadmap.", "Content Marketing"),
    ("cm-digital-pr", "Digital PR & Programmatic Awareness", "Elevate brand authority through targeted programmatic nurture.", "Content Marketing"),
    ("cm-roi-focused-attribution", "ROI-Focused Attribution & Performance", "Decode success and fine-tune campaigns for maximum sales.", "Content Marketing")
]

generic_desc = [
    "Navigating modern B2B markets requires more than just basic industry knowledge; it demands deep, data-driven insights into market saturation, emerging trends, and untapped customer segments. We leverage our extensive database of millions of verified company profiles to map out the entire competitive landscape. This allows us to pinpoint exactly where demand is growing and where your competitors are failing to meet customer needs, giving you a clear roadmap for strategic entry and expansion.",
    "Instead of relying on outdated industry reports or gut feelings, our approach provides real-time visibility into market dynamics. We analyze purchasing patterns, technology adoption rates, and economic indicators to identify high-potential niches that align perfectly with your unique value proposition. By understanding the structural shifts occurring within your target sectors, you can position your brand to capture market share before these opportunities become mainstream and heavily contested by industry incumbents.",
    "The ultimate outcome is extreme confidence in your go-to-market strategy. By removing the guesswork from expansion planning, your leadership team can allocate resources, finalize product roadmaps, and launch targeted marketing campaigns with the assurance that they are addressing genuine, validated market needs. This data-backed foundation not only accelerates your growth trajectory but also significantly reduces the inherent risks associated with entering new or evolving business landscapes."
]

generic_service_info = [
    "Our opportunity mapping process begins by establishing a comprehensive baseline of your current market position relative to the broader industry landscape. We then ingest massive amounts of firmographic and behavioral data to identify specific sub-segments where buyers are actively seeking alternative solutions but are severely underserved by the current market offerings. This extreme level of detail ensures your strategic initiatives are highly focused.",
    "We combine quantitative data analysis with qualitative insights drawn from key industry stakeholders and early adopters. This dual approach validates initial hypotheses and provides a nuanced understanding of the cultural and operational barriers that might impede market entry. By anticipating these challenges early, we help you craft go-to-market strategies that are not only innovative but practically executable within the realities of the targeted ecosystem.",
    "Armed with this intelligence, your organization can forcefully pivot toward the most lucrative opportunities without hesitation. Whether you are launching a completely new product line or seeking to penetrate an adjacent industry vertical, our market landscape analysis provides the definitive blueprint required to secure early wins, build momentum, and establish long-term market dominance against established competitors."
]

def adapt_desc(desc, subject):
    return desc.replace("opportunity mapping", subject.lower())

for slug, title, subtitle, category in slugs:
    data[slug] = {
        "banner": {
            "title": title,
            "subtitle": subtitle
        },
        "section": {
            "title": f"Ready to master {title}?",
            "description1": adapt_desc(generic_desc[0], title),
            "description2": adapt_desc(generic_desc[1], title),
            "description3": adapt_desc(generic_desc[2], title)
        },
        "serviceInfo": {
            "title": f"Expertise in {title}",
            "subtitle": "Actionable Insights & Growth",
            "description1": adapt_desc(generic_service_info[0], title),
            "description2": adapt_desc(generic_service_info[1], title),
            "description3": adapt_desc(generic_service_info[2], title)
        }
    }

with open("src/data/service-contact.json", "w") as f:
    json.dump(data, f, indent=4)
