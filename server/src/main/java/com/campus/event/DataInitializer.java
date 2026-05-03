package com.campus.event;

import com.campus.event.entity.Event;
import com.campus.event.entity.Member;
import com.campus.event.repository.EventRepository;
import com.campus.event.repository.MemberRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(EventRepository repository, MemberRepository memberRepository) {
        return args -> {
            if (repository.count() == 0) {
                Event e1 = new Event(null, "Cloud Computing Summit", "Oct 24, 2024", 
                    "Explore the future of serverless architecture and multi-cloud strategies with industry leads from Google and AWS.", 
                    "GDG", "Free Entry", "https://lh3.googleusercontent.com/aida-public/AB6AXuBLD_UYtXcLnAZ5egtQiuEseEBYiqw6ISLTDiIl4XWoWZ877hnoumHOcqrxwbKz2q_EuYX-dzPalukxBU75c087A2GrUn42BNziol8snhlAVukhaHPWW4FezfUUsePnnEmLJDN-z9vbKhGAnsaH0XPzcM-bM_rl4y1yFCwewhouFIAkbKEk9AyRKUDMAkQyJO2E2UPgQMGjA3Yspol4arlWc-9V4cKjLgRds3FMcNq_O4lH8cqcTh07esarcUYTHQAWrlrTIFzoWA4");
                
                Event e2 = new Event(null, "Cybersecurity Workshop", "Nov 12, 2024", 
                    "Hands-on session on network security, ethical hacking fundamentals, and zero-trust implementation protocols.", 
                    "CSI", "Limited Slots", "https://lh3.googleusercontent.com/aida-public/AB6AXuAUoXUSC02Mp3bA78S7yQBoF9vfFv455mGmA5Ex-uCOFWNmTwJ8Ip3xHDoYj2WvjbLTXOQwR2_fH4UMvKxezHpXDfSMqAOMlHyphFHX2_XLElRcaoHqRqqUW20efmbYPgCF7lRh4PzTSFzv0FfUkfnLyi1s6at04rIfyEjQ5IK4IgL4O0ixETYs80qJzX-0oB56D_lVBvnTDtRSnT9TF8tNfQ56kiEpLo5EaHY0G2sHm4UVwZwgo6VRJ2GbUflbQ47BlzqGuC6JfZs");
                
                Event e3 = new Event(null, "Generative AI Expo", "Dec 05, 2024", 
                    "Showcasing student-led projects in LLM fine-tuning and stable diffusion applications in creative arts.", 
                    "AI CLUB", "Entry Pass", "https://lh3.googleusercontent.com/aida-public/AB6AXuDudKGic_hG8pXatEXgLgrtgBEMGmuDW4P2SwUIbZCHp63FY2k9PxVZyNlJctsU8yFKhMP4VabifblJyBKkV8FQC_CJh4r_PMb3A-ezKO725fIx4jF7telT5H9dwuds0CAz4eBfcX6UUekChMLNNhU1pyodcmtIR9l63x-U6GKt9V2U3z2yutwynSeTfcVvpSL6vv7vsQHixi_yIKY4YPPW67TtopSrCfdYw3MDHwJyZqJMUwJNYumKK6W-E9l8LCbNxfxogR2xKt4");

                repository.saveAll(Arrays.asList(e1, e2, e3));
                System.out.println("Sample events initialized in database.");
            }

            if (memberRepository.count() == 0) {
                memberRepository.saveAll(Arrays.asList(
                    new Member("Aryan Kulkarni", "Club Lead", "aryan.k@dypatil.edu", "Active", null),
                    new Member("Isha Sharma", "Event Coordinator", "isha.s@dypatil.edu", "Active", null),
                    new Member("Rohan Mehta", "Tech Lead", "rohan.m@dypatil.edu", "Active", null),
                    new Member("Ananya Rao", "Marketing Head", "ananya.r@dypatil.edu", "Active", null)
                ));
                System.out.println("Sample members initialized in database.");
            }
        };
    }
}
